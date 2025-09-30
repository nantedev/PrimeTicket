import { CardCompact } from "@/components/card-compact";
import { getComments } from "../queries/get-comments";
import { CommentItem } from "./comment-item";
import { CommentCreateForm } from "./comment-create-form";
import { isOwner } from "@/features/auth/utils/is-owner";
import { getAuth } from "@/features/auth/queries/get-auth";
import { CommentDeleteButton } from "./comment-delete-button";

type CommentsProps = {
  ticketId: string;
};

const Comments = async ({ ticketId }: CommentsProps) => {
  const comments = await getComments(ticketId);
  const { user } = await getAuth();
  return (
    <>
      <CardCompact
        title="Created Comments"
        description="A new comment will be created"
        content={<CommentCreateForm ticketId={ticketId} />}
      />

      <div className="flex flex-col gap-y-2 ml-8">
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            buttons={[
              ...(isOwner(user, comment)
                ? [<CommentDeleteButton key="0" id={comment.id} />]
                : []),
            ]}
          />
        ))}
      </div>
    </>
  );
};

export { Comments };
