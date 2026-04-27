import path from "path";
import { error } from "@/lib/utils/error";
import { promises as fs } from "fs";
import { NavItem } from '@/lib/types/entities/header';

export async function getMenus(): Promise<NavItem[]> {
  let response: NavItem[] = [];

  try {
    // change to fetch function for real fetcher
    const filePath = path.join(
      process.cwd(),
      'data',
      'navigation-menus.json',
    );
    const data = await fs.readFile(filePath, 'utf-8');
    response = JSON.parse(data);
    // if(response.status > 400) throw Error(response.message)
  } catch (e) {
    throw error(e);
  }

  return response;
}