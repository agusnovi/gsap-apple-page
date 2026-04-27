import { Refs, SectionState, Timelines } from "@/lib/types/entities/airpods";

export const createScrollHandler = ({
  timelines,
  refs,
}: {
  timelines: Timelines;
  refs: Refs;
  }) => {
    // avoid double scroll when animation running
    let isAnimating = false;
    // to delay scroll use debounce 
    let lastScroll = 0;
    // section current position
    let state: SectionState = 'S1';

    // helper function: avoid span scroll when animating running
    const lock = () => (isAnimating = true);
    const unlock = () => (isAnimating = false);
    const scrollTo = (el: HTMLElement) => {
      el.scrollIntoView({ behavior: 'smooth' });
    };

    return (e: WheelEvent) => {
      // remove browser scroll, using scroll manual
      e.preventDefault();

      // avoid faster scroll, using delay 700 ms every scroll
      const now = Date.now();
      if (now - lastScroll < 700) return;
      lastScroll = now;

      // if animation running, we ignore scroll
      if (isAnimating) return;

      // props timeline and content ref
      const { s1, s2, s3 } = timelines;
      const { first, second, third } = refs;

      // scroll down
      if (e.deltaY > 0) {
        switch (state) {
          case 'S1':
            /*
              - play animation: S1
              - if onComplete: scroll to section 2
              - delay 500ms
              - play animation S2
              - update state → S2
              - unlock scroll
            */
            lock();
            s1.play().eventCallback('onComplete', () => {
              scrollTo(second);

              setTimeout(() => {
                s2.play().eventCallback('onComplete', () => {
                  state = 'S2';
                  unlock();
                });
              }, 500);
            });
            break;

          case 'S2':
            /*
              - scroll to section 3
              - delay 500ms
              - play animation S3
              - update state
            */
            
            lock();
            scrollTo(third);

            setTimeout(() => {
              s3.play().eventCallback('onComplete', () => {
                state = 'S3';
                unlock();
              });
            }, 500);
            break;

          case 'S3':
            break;
        }
      }

      // scroll up
      if (e.deltaY < 0) {
        switch (state) {
          case 'S3':
            /*
              - reverse animation S3
              - onReverseComplete selesai → scroll ke S2
              - update state
            */
            lock();
            s3.reverse().eventCallback('onReverseComplete', () => {
              scrollTo(second);
              state = 'S2';
              unlock();
            });
            break;

          case 'S2':
            /*
            - if S1 animation completed
            - reverse to the begining
            */
            lock();
            s2.reverse().eventCallback('onReverseComplete', () => {
              scrollTo(first); 
              state = 'S1';
              unlock();
            });
            break;

          case 'S1':
            if (s1.progress() > 0) {
              lock();
              s1.reverse().eventCallback('onReverseComplete', () => {
                unlock();
              });
            }
            break;
        }
      }
    };
  };
