import { Component, Input, EventEmitter } from "@angular/core";
import { Card } from "../card";
import { DragSource, SkyhookDndService } from "angular-skyhook";
import { DropEvent } from "angular-skyhook-card-list";
import { Output } from "@angular/core";
import { getEmptyImage } from "react-dnd-html5-backend";
import { ItemTypes } from "../item-types";

@Component({
    selector: "kanban-list",
    templateUrl: "./kanban-list.component.html",
    styleUrls: ["./kanban-list.component.scss"]
})
export class KanbanListComponent {
    @Input() list: Card[];
    @Input() source: DragSource;
    @Input() dragging = false;
    @Output() dropCard = new EventEmitter<DropEvent>();
    @Output() addCard = new EventEmitter<string>();

    ItemTypes = ItemTypes;
}
