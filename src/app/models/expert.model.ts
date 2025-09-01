export interface Expert {
  id: string;
  img: string;
  name: string;
  description: string;
  isLiked: boolean;
  stars: number;
  reviews: number;
  experience: number;
  details: string;
  languages: string[]; // as Base64
  expertise: string[];
  earliestAvailableTime: string;
  hourRate: {
    text: string;
    value: number;
  }

}
