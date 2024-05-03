import { LapTimerIcon } from "@radix-ui/react-icons";
import { readingTime } from "@/lib/readingTime";
import { Badge } from "@/components/ui/badge";
import { BlocksContent } from "@strapi/blocks-react-renderer";

const ReadingTime = (props: { Contenu: BlocksContent | null }) => {
  return (
    <Badge className={"mt-4"} variant={"outline"}>
      <LapTimerIcon className="mr-2 h-4 w-4" />
      {`Temps de lecture: ${readingTime(props.Contenu)} min`}
    </Badge>
  );
};

export default ReadingTime;
