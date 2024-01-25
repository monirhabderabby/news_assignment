import Image from "next/image";
import React from "react";
import { CommentType } from "../../../../../../types";

interface CommentListProps {
  comments: CommentType[];
}
const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <div className="mt-8 space-y-4">
      {comments.map(({ id, test, user }) => (
        <div key={id} className="flex gap-x-8 p-2">
          <Image src={user.image} alt="profile" height={60} width={60} />
          <p>{test}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
