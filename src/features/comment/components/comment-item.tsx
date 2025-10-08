import { Card } from "@/components/ui/card";
import { CommentWithMetadata } from "../types";

type CommentItemProps = {
  comment: CommentWithMetadata;
  buttons: React.ReactNode[];
};

const CommentItem = ({ comment, buttons }: CommentItemProps) => {
  return (
    <div className="flex gap-x-4">
      <Card className="p-4 flex-1 flex flex-col gap-y-2">
        <div className="flex justify-between">
          <p className="text-sm text-muted-foreground">
            {comment.isOwner ? "You" : comment.user?.username ?? "Deleted User"}
          </p>
          <p className="text-xs text-muted-foreground">
            {comment.createdAt.toLocaleString()}
          </p>
        </div>
        <p className="whitespace-pre-line">{comment.content}</p>
      </Card>
      <div className="flex flex-col gap-y-1">{buttons}</div>
    </div>
  );
};

export { CommentItem };
