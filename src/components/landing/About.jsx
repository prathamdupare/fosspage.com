export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Company
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                FossPage is a platform dedicated to empowering individuals to
                express themselves online through elegant and minimalist
                personal pages. Our open-source solution puts users in control,
                offering customizable features such as unique links, profile
                sections, and space for self-expression. We believe in the
                beauty of simplicity and aim to democratize online presence
                creation, ensuring that everyone has the opportunity to share
                their story authentically in a clutter-free environment. Join us
                in embracing minimalism and self-expression on the web with
                FossPage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
