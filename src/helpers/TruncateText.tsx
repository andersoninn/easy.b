// Função para truncar texto
export const truncateText = (text: string, maxLength: number = 12): string => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + "...";
};
// Componente para exibir texto truncado com tooltip
interface TruncatedTextProps {
  text: string;
  maxLength?: number;
  className?: string;
}

export const TruncatedText = ({
  text,
  maxLength = 12,
  className = "",
}: TruncatedTextProps) => {
  const truncatedText = truncateText(text, maxLength);
  const isTruncated = text.length > maxLength;

  return (
    <span title={isTruncated ? text : undefined} className={className}>
      {truncatedText}
    </span>
  );
};
