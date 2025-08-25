import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExportStarIcon } from "@/assets/icons/export-start-icon";
import { ExportPIcon } from "@/assets/icons/export-p-icon";
import { ExportHubspotIcon } from "@/assets/icons/export-hubspot-icon";
import type { Lead } from "@/types/lead";

type LeadRowProps = {
  lead: Lead;
  isSelected: boolean;
  onToggleSelect: (id: string, checked: boolean) => void;
  setIsModalOpen: (open: boolean) => void;
  setSelectedLead: (lead: Lead) => void;
  getTagColor: (tag: string) => { bg: string; text: string; border: string };
};

const renderExportIcon = (type: string) => {
  switch (type) {
    case "star":
      return <ExportStarIcon className="w-7 h-7" />;
    case "crown":
      return (
        <div className="flex items-center gap-1">
          <ExportStarIcon className="w-7 h-7 " />
          <ExportPIcon className="w-7 h-7 " />
          <ExportHubspotIcon className="w-7 h-7 " />
        </div>
      );
    default:
      return (
        <Button size="sm" variant="outline" className="text-xs px-3">
          Export
        </Button>
      );
  }
};

export function LeadRow({
  lead,
  isSelected,
  onToggleSelect,
  setIsModalOpen,
  setSelectedLead,
  getTagColor,
}: LeadRowProps) {
  return (
    <tr
      key={lead.id}
      className={`border-b border-gray-50 hover:bg-gray-50 transition-colors ${
        isSelected ? "bg-purple-25" : ""
      }`}
    >
      <td className="py-4 px-6">
        <Checkbox
          checked={isSelected}
          onCheckedChange={(checked) =>
            onToggleSelect(lead.id, checked as boolean)
          }
        />
      </td>
      <td className="py-3 px-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#FFC0C5] to-pink-500 rounded-full flex items-center justify-center text-[#681219] text-sm font-bold">
            {lead.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div>
            <p className="text-sm  text-[#171717]">{lead.name}</p>
            <p className="text-[12px] text-[#5C5C5C]">{lead.email}</p>
          </div>
        </div>
      </td>
      <td className="py-4 px-6">
        <div className="flex flex-wrap gap-1">
          {lead.tags.length > 0 ? (
            lead.tags.slice(0, 1).map((tag, tagIndex) => {
              const colors = getTagColor(tag);
              return (
                <Badge
                  key={tagIndex}
                  variant="outline"
                  className={`${colors.bg} ${colors.text} ${colors.border} text-xs font-medium`}
                >
                  {tag}
                </Badge>
              );
            })
          ) : (
            <span className="text-sm text-gray-400 italic">No tags added</span>
          )}
          {lead.tags.length > 1 && (
            <Badge
              variant="outline"
              className="text-xs bg-gray-50 text-gray-500 cursor-pointer"
              onClick={() => {
                setSelectedLead(lead);
                setIsModalOpen(true);
              }}
            >
              +{lead.tags.length - 1}
            </Badge>
          )}
        </div>
      </td>
      <td className="py-4 px-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 text-xs font-semibold">
            {lead.connectedWith.avatar ? (
              <img
                src={lead.connectedWith.avatar}
                alt="connected avatar"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              lead.connectedWith.name
                .split(" ")
                .map((n) => n[0])
                .join("")
            )}
          </div>
          <div>
            <p className=" text-[#171717] text-sm">{lead.connectedWith.name}</p>
            <p className="text-xs text-[#5C5C5C]">{lead.connectedWith.email}</p>
          </div>
        </div>
      </td>
      <td className="py-4 px-6">
        <div className="">
          <div className="text-sm text-[#171717]">
            {lead.date.split(" - ")[0]}
          </div>
          <div className="text-xs text-[#5C5C5C]">
            {lead.date.split(" - ")[1]}
          </div>
        </div>
      </td>
      <td className="py-4 px-6">
        <div className="flex items-center justify-center gap-2 w-10">
          {renderExportIcon(lead.exportType)}
        </div>
      </td>
    </tr>
  );
}
