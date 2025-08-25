export interface Lead {
  id: string;
  name: string;
  email: string;
  tags: string[];
  connectedWith: {
    name: string;
    email: string;
    avatar: string;
  };
  date: string;
  exportType: "export" | "star" | "crown";
  status: string;
  score: number;
}
