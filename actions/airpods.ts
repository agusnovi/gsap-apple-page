import path from 'path';
import { promises as fs } from 'fs';
import { error } from '@/lib/utils/error';
import { ChapterNavItem } from '@/lib/types/entities/chapter-nav';

export async function getChapterNav(): Promise<ChapterNavItem[]> {
  let response: ChapterNavItem[] = [];
  try {
    const filePath = path.join(
      process.cwd(),
      'data',
      'airpods-chapter-nav.json',
    );
    const data = await fs.readFile(filePath, 'utf-8');
    response = JSON.parse(data);
    // if(response.status > 400) throw Error(response.message)
  } catch (e) {
    throw error(e);
  }

  return response;
}
