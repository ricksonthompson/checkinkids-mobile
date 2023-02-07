export interface IAlert {
  title: string;
  message: string;
  closeMessage: string;
  confirmMessage: string;
  closeAction?: () => any;
  confirmAction?: () => any;
}
