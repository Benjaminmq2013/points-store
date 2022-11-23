
export declare namespace T{

  interface products {
    img: Img;
    _id: string;
    name: string;
    cost: number;
    category: string;
  }

  interface Img {
    url: string;
    hdUrl: string;
  }

  interface user {
    _id: string;
    name: string;
    points: number;
    createDate: string;
    redeemHistory?: (HistoryEntity)[] | null;
    __v: number;
  }

  interface HistoryEntity {
    img: Img;
    createDate: string;
    _id: string;
    name: string;
    cost: number;
    category: string;
    productId: string;
  }

}

