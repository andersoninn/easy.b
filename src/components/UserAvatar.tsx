import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type userAvatarProps = {
  classNames?: string;
  firstName: string;
  lastName: string;
};

export default function UserAvatar({
  classNames,
  firstName,
  lastName,
}: userAvatarProps) {
  // Pegar as iniciais do firstName e lastName com verificações de segurança
  const initials =
    `${firstName?.[0]?.toUpperCase()}${lastName?.[0]?.toUpperCase()}` || "U";

  return (
    <Avatar className={`w-10 h-10 ${classNames}`}>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback delayMs={0}>{initials}</AvatarFallback>
    </Avatar>
  );
}
