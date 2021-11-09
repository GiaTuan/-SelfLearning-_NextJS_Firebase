
export class Task {
    id: number = 0;
    title: string = "";
    content: string = "";
    status: number = 0;
    createdOn: {
        seconds: number,
        nanoseconds: number,
    } = {
            seconds: 0,
            nanoseconds: 0
        };

    constructor(title: string, content: string, status: number) {
        this.title = title;
        this.content = content;
        this.status = status;
    }
}