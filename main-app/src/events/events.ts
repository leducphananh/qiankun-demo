export interface AppEvents {
  "user.updated": {
    id: number;
    name: string;
    email: string;
  };

  "user.logged-out": undefined;

  "theme.changed": {
    theme: "light" | "dark";
  };
}
