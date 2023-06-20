export class Task {
  constructor(
    private title: string,
    private description: string,
    // private priority: string,
    private date: Date,
    private category: string,
    private assignedTo: any[]
  ) // private status: string
  {}
}
