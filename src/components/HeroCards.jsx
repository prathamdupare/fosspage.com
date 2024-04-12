import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}

      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="/hero.png"
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Pratham Dupare</CardTitle>
          <CardDescription className="font-normal text-primary">
            Software Developer
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            Excited to kick off FossPage.com – a minimalist SaaS enabling users
            to create elegant personal pages.
          </p>
        </CardContent>

        <CardFooter>
          <div>
            <a
              href="https://github.com/prathamdupare"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Github icon</span>
              <GitHubLogoIcon className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/prathammdupare"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">X icon</span>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-foreground w-5 h-5"
              >
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/pratham-dupare-a99b97247/"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Linkedin icon</span>
              <Linkedin size="20" />
            </a>
          </div>
        </CardFooter>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Pricing
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">Coming Soon</span>
          </div>

          <CardDescription></CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full">Start Free Trial</Button>
        </CardContent>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl"></div>
          <div>
            <CardTitle>Fully Open Source</CardTitle>
            <CardDescription className="flex text-sm mt-2">
              <div>
                <Check className="w-5 h-5 text-green-400" /> No hidden fees{" "}
                <br />{" "}
              </div>
              <div>
                <Check className="w-5 h-5 text-green-400" /> 100% customizable{" "}
                <br />{" "}
              </div>
              <div>
                <Check className="w-5 h-5 text-green-400" /> No coding required{" "}
                <br />{" "}
              </div>
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
