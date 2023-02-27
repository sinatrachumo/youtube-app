/**
 * SearchResult is a data-structure that holds an individual
 * record from a YouTube video search
 */
export class SearchResult {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string; //This is a TypeScript class declaration named "SearchResult" with five properties: "id", "title", "description", "thumbnailUrl", and "videoUrl". Each property is typed as a string.

  constructor(obj?: any) {
    //This is the constructor method for the class "SearchResult". It takes an optional argument of "obj" with any data type
    this.id = (obj && obj.id) || null; //This line checks if the "obj" argument exists and if it has an "id" property. If it does, it sets the value of "id" to that property's value. If not, it sets "id" to null.
    this.title = (obj && obj.title) || null;
    this.description = (obj && obj.description) || null;
    this.thumbnailUrl = (obj && obj.thumbnailUrl) || null;
    this.videoUrl =
      (obj && obj.videoUrl) || `https://www.youtube.com/watch?v=${this.id}`; //This line checks if the "obj" argument exists and if it has a "videoUrl" property. If it does, it sets the value of "videoUrl" to that property's value. If not, it sets "videoUrl" to a YouTube video URL with the "id" property of the object.
  }
}
