import { GiftTypes } from "~/utils";
import { getConnection } from "./utils/mongodb";

export const getInfo = async (linkID: string, type: GiftType) => {
  const conn = await getConnection();
  const db = conn.db("surprise-tech");

  const colGifts = db.collection<GiftDBO>("gift");

  const gift = await colGifts.findOne({
    type,
    linkID,
    active: true,
  });

  if (!gift) return null;

  if (gift.type === GiftTypes.YELLOW_FLOWERS) {
    return {
      id: gift.id,
      type: gift.type,
      linkID: gift.linkID,
      dueDate: gift.dueDate,
      phoneNumber: gift.phoneNumber,
      active: gift.active,
      data: gift.data
    };
  }

  return {
    id: gift.id,
    type: gift.type,
    linkID: gift.linkID,
    dueDate: gift.dueDate,
    phoneNumber: gift.phoneNumber,
    active: gift.active,
    data: gift.data,
  };
};
