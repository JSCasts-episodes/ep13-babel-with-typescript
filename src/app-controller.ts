export default class AppController {
  constructor(private request, private response) {}

  async index (): Promise<string> {
    return 'Hello world'
  }
}