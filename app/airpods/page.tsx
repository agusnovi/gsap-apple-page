import { use } from 'react';
import { getChapterNav } from '@/actions/airpods';
import ChapterNav from '@/components/airpods/chapter-nav';
import AirpodsContent from '@/components/airpods/airpods-content';

export default function AirpodsPage() {
  const chapterNav = use(getChapterNav());

  return (
    <>
      <ChapterNav data={chapterNav} />
      <main>
        <AirpodsContent />
      </main>
    </>
  );
}
