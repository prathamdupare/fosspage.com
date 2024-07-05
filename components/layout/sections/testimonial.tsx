"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://example.com/ravi_kumar.png",
    name: "Ravi Kumar",
    userName: "Software Engineer",
    comment:
      "Fosspage is fantastic! The open-source tools are incredibly useful for my projects. They've helped me streamline development and save time.",
    rating: 5.0,
  },
  {
    image: "https://example.com/ananya_sharma.png",
    name: "Ananya Sharma",
    userName: "UI Designer",
    comment:
      "I'm impressed with Fosspage's commitment to privacy. The tools are not only secure but also beautifully designed, making my work much more enjoyable.",
    rating: 4.8,
  },
  {
    image: "https://example.com/rahul_joshi.png",
    name: "Rahul Joshi",
    userName: "Data Analyst",
    comment:
      "Using Fosspage has been a game-changer for our analytics team. The tools are robust and easy to integrate, enhancing our data processing capabilities.",
    rating: 4.9,
  },
  {
    image: "https://example.com/maya_patel.png",
    name: "Maya Patel",
    userName: "Project Manager",
    comment:
      "Fosspage has simplified project management for me. The tools allow seamless collaboration and organization, boosting team productivity.",
    rating: 5.0,
  },
  {
    image: "https://example.com/akash_singh.png",
    name: "Akash Singh",
    userName: "Full Stack Developer",
    comment:
      "I highly recommend Fosspage! The tools are versatile and well-documented, making them a great choice for developers looking to innovate.",
    rating: 5.0,
  },
  {
    image: "https://example.com/isha_mehta.png",
    name: "Isha Mehta",
    userName: "System Administrator",
    comment:
      "Fosspage's tools are reliable and efficient. They've helped us optimize our systems while maintaining high standards of security and performance.",
    rating: 4.9,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Hear What Our 1000+ Community Members Say
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/75042455?v=4"
                        alt="radix"
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
