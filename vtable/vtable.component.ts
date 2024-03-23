import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  thead,
  tbody,
  pagination,
  triggeredEvent,
  paginationOutput,
} from "./tableType";
import { NgxPaginationModule } from "ngx-pagination";
import { FormsModule } from "@angular/forms";
import { DATE_PIPE_FORMAT } from "src/Utilities/Const/pattern";

@Component({
  selector: "v-table",
  standalone: true,
  imports: [CommonModule, NgxPaginationModule, FormsModule],
  templateUrl: "./vtable.component.html",
  styleUrl: "./vtable.component.scss",
})
export class VtableComponent {
  @Input({ required: true }) thead!: thead[];
  @Input({ required: true }) tbody!: tbody[];
  @Input({ required: true }) dataArr!: any[];
  @Input({ required: true }) pagination!: pagination;
  @Input() noDataFoundText: any = "No Data Found";
  @Input() loader: boolean = false;
  @Output() eventsHappened: EventEmitter<triggeredEvent> = new EventEmitter();
  @Output() paginationOutput: EventEmitter<paginationOutput> =
    new EventEmitter();
  defaultPageSize!: number;
  DATE_PIPE_FORMAT = DATE_PIPE_FORMAT;
  jumpToArr: number[] = [];
  pageSizeArr: number[] = [10, 25, 50];
  iconArr: any = {
    delete: '<i class="fa-solid fa-trash-can"></i>',
    edit: '<i class="fa-solid fa-pencil"></i>',
    view: '<i class="fa-solid fa-eye"></i>',
    downlaod: '<i class="fa-solid fa-download"></i>',
    change: '<i class="fa-regular fa-circle-right"></i>',
    add: '<i class="fa-solid fa-plus"></i>',
  };
  ngOnInit() {
    this.defaultPageSize = this.pagination.pageSize;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty("dataArr")) {
      this.changeJumpToArr();
    }
  }

  eventTriggered(event: Event, parameter: any, action?: string) {
    this.eventsHappened.emit({
      event: event,
      parameter: parameter,
      action: action,
    });
  }

  //#region pagination functions
  changePage(event: number) {
    this.pagination.page = event;
    this.emitPagination();
  }
  changePageSize(event: any) {
    if (event.target.value && event.target.value > 0) {
      this.pagination.pageSize = parseInt(event.target.value);
    } else {
      event.target.value = null;
      this.pagination.pageSize = this.defaultPageSize;
    }
    this.pagination.page = 1;
    this.emitPagination();
    this.changeJumpToArr();
  }
  emitPagination() {
    if (this.pagination.optimization || this.pagination.getPagination) {
      let object: paginationOutput = {
        page: this.pagination.page,
        pageSize: this.pagination.pageSize,
      };
      this.paginationOutput.emit(object);
    }
  }
  changeJumpToArr() {
    let array: number[] = [];
    for (
      let index = 1;
      index <= Math.ceil(this.pagination.totalItems / this.pagination.pageSize);
      index++
    ) {
      array.push(index);
    }
    this.jumpToArr = array;
  }
  //#endregion
}
