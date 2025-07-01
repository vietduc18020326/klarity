import { memo } from "react";

interface Props {
  title: string;
  description: string;
  image: string;
  titleSuffix?: string;
}

export const IntroduceCard = memo(function IntroduceCard({
  title,
  description,
  image,
  titleSuffix,
}: Props) {
  return (
    <div className="rounded-4 flex-1 shadow flex flex-col">
      <img
        src={image}
        alt={title}
        className="w-full aspect-[600/350] rounded-tr-4 rounded-tl-4"
      />

      <div className="p-m bg-white flex flex-col w-full gap-2xl items-start rounded-br-4 rounded-bl-4">
        <span className="h3-6 text-brand-500">
          {title}
          {titleSuffix ? (
            <span className="text-brand-900">{titleSuffix}</span>
          ) : null}
        </span>

        <span className="b3-4 text-grey-600">{description}</span>
      </div>
    </div>
  );
});
