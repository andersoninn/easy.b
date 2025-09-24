import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

export default function UserAvatar() {
  return (
    <Avatar className="w-10 h-10">
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
