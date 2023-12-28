import { Badge } from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { Product } from "../types/types";
type SimpleBadgeProps = {
  favList: Product[];
};
export default function SimpleBadge({ favList }: SimpleBadgeProps) {
  return (
    <Badge badgeContent={favList.length} color="secondary">
      <Favorite className="fav_icon" />
    </Badge>
  );
}
