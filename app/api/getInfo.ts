import { getConnection } from "./utils/mongodb";

export const getInfo = async (linkID: string) => {
  const conn = await getConnection();
  const db = conn.db("surprise-tech");

  const colCards = db.collection<CardDBO>("card");

  const card = await colCards.findOne({
    linkID,
    active: true,
  });


  if(!card) return null

  return {
    id: card.id,
    linkID: card.linkID,
    photoUrl: card.photoUrl,
    type: card.type,
    dueDate: card.dueDate,
    phoneNumber: card.phoneNumber,
    active: card.active,
  }
};
