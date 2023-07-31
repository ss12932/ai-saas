import { Heading } from "@/components/heading";
import { MessageSquare } from "lucide-react";

const ConversationPage = () => {
  return (
    <div>
      <Heading
        title="Conversation"
        description="Our most advanced conversation model"
        icon={MessageSquare}
        iconColor="text-voilet-500"
        bgColor="bg-violet-500/10"
      />
    </div>
  );
};

export default ConversationPage;
