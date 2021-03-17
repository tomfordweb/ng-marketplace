import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { INDEXED_DB_CONFIG } from "../../tokens";
import { VersionGroupService } from "./version-group.service";
import { VERSION_GROUP_INDEXED_DB_CONFIG } from "./version-group.indexed-db";

@NgModule({
  declarations: [],
  providers: [VersionGroupService],
  imports: [CommonModule],
})
export class VersionGroupModule {}
