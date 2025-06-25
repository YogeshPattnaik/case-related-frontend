interface MenuItem {
  path?: string;
  children?: MenuItem[];
}

export function flattenMenu(menu: MenuItem[]): string[] {
  let paths: string[] = [];
  menu.forEach((item: MenuItem) => {
    if (item.path) paths.push(item.path);
    if (item.children) paths = paths.concat(flattenMenu(item.children));
  });
  return paths;
} 