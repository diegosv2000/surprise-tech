type GiftType = "yellow-flowers" | "declaration";

interface YellowFlowersDBO {
  id: string;
  type: "yellow-flowers";
  linkID: string;
  dueDate: string;
  phoneNumber: string;
  active: boolean;
  data: {
    photoUrl: string;
  };
}
interface DeclarationDBO {
  id: string;
  type: "declaration";
  linkID: string;
  dueDate: string;
  phoneNumber: string;
  active: boolean;
  data: {
    introduction: string;
    declaration: string;
  };
}

type GiftDBO = YellowFlowersDBO | DeclarationDBO;
