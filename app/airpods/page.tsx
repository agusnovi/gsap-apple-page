import { use } from 'react';
import { getChapterNav } from '@/actions/airpods';
import Airpods3rd from '@/components/airpods/banners/airpods-3rd';
import AirpodsComparation from '@/components/airpods/airpods-comparation';
import AipodsMax from '@/components/airpods/airpods-max';
import ChapterNav from '@/components/airpods/chapter-nav';

export default function AirpodsPage() {
  const chapterNav = use(getChapterNav());

  return (
    <>
      <ChapterNav data={chapterNav}/>
      <main>
        <Airpods3rd />
        {/*<AipodsMax />
        <AirpodsComparation />*/}
      </main>
    </>
  );
}
