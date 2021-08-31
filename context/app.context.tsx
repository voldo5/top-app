import { createContext, ReactNode, useState } from "react";
import { MenuItem } from "../interfaces/menu.interface";
import { TopLevelCategory } from "../interfaces/page.interface";
import { SearchModel } from "../interfaces/search.interface";

export interface IAppContext {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  setMenu?: (newMenu: MenuItem[]) => void;
  searchModel: SearchModel;
}

export const AppContext = createContext<IAppContext>({
  menu: [],
  firstCategory: TopLevelCategory.Courses,
  searchModel: { searchQuery: "", searchResult: "" },
});

export const AppContextProvider = ({
  menu,
  firstCategory,
  searchModel,
  children,
}: IAppContext & { children: ReactNode }): JSX.Element => {
  const [menuState, setMenuState] = useState<MenuItem[]>(menu);
  const setMenu = (newMenu: MenuItem[]) => {
    setMenuState(newMenu);
  };

  return (
    <AppContext.Provider
      value={{ menu: menuState, firstCategory, setMenu, searchModel }}
    >
      {children}
    </AppContext.Provider>
  );
};
