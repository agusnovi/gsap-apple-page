type Timelines = {
  s1: GSAPTimeline;
  s2: GSAPTimeline;
  s3: GSAPTimeline;
};

type Refs = {
  first: HTMLElement;
  second: HTMLElement;
  third: HTMLElement;
};

type SectionState = 'S1' | 'S2' | 'S3';

export const createScrollHandler = ({
  timelines,
  refs,
}: {
  timelines: Timelines;
  refs: Refs;
}) => {
  let isAnimating = false;
  let lastScroll = 0;
  let state: SectionState = 'S1';

  const lock = () => (isAnimating = true);
  const unlock = () => (isAnimating = false);

  const scrollTo = (el: HTMLElement) => {
    el.scrollIntoView({ behavior: 'smooth' });
  };

  return (e: WheelEvent) => {
    e.preventDefault();

    const now = Date.now();
    if (now - lastScroll < 700) return;
    lastScroll = now;

    if (isAnimating) return;

    const { s1, s2, s3 } = timelines;
    const { first, second, third } = refs;

    // ======================
    // ⬇️ SCROLL DOWN
    // ======================
    if (e.deltaY > 0) {
      switch (state) {
        case 'S1':
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

    // ======================
    // ⬆️ SCROLL UP
    // ======================
    if (e.deltaY < 0) {
      switch (state) {
        case 'S3':
          lock();
          s3.reverse().eventCallback('onReverseComplete', () => {
            scrollTo(second);
            state = 'S2';
            unlock();
          });
          break;

        case 'S2':
          lock();
          s2.reverse().eventCallback('onReverseComplete', () => {
            scrollTo(first); // ✅ FIX UTAMA
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
