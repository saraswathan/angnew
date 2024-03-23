type thead = {
  displayName: string;

  //for styling and functionality
  thClass?: string;
  thStyle?: string;
  class?: string;
  id?: string;
  style?: string;

  //for elements and events
  isCheckBox?: boolean;
  inputLabel?: string;
  event?: "click" | "change";
};

type tbody = {
  attrName: string;
  noData?: string;

  //for styling and functionality
  tdClass?: string;
  tdStyle?: string;
  inputId?: string;
  class?: string;
  style?: string;

  //for elements and events
  elementType?: "input" | "serialNo" | "date" | "dropDown" | "conditional";
  inputType?: "text" | "number" | "checkbox" | "select";
  inputLabel?: string;
  event?: typeEvent;
  tdClick?: boolean;
  clickedFor?: string;
  modalId?: string;

  //for routers and parameters
  parameter?: string;

  //for dropdown
  dropDownData?: typeDropDown[];

  //for conditional
  condition?: unknown;
  trueStatement?: unknown;
  falseStatement?: unknown;

  //for select
  optionArr?: any[];
  optionValue?: string;
  optionLabel?: string;
  selectedOption?: string;
};
type triggeredEvent = { event: any; action?: string; parameter: any };
type typeEvent = "click" | "change" | "input" | "dblclick";
type typeDropDown = {
  icon?: string;
  content: string;
  parameter: string;
  modalId?: string;
};
type pagination = {
  totalItems: number;
  page: number;
  pageSize: number;
  optimization: boolean;
  getPagination?: boolean;
};
type paginationOutput = {
  page: number;
  pageSize: number;
};
export { thead, tbody, triggeredEvent, pagination, paginationOutput };
