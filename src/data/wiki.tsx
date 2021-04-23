import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

export const ServerSideRenderingWiki = () => {
  return (
    <>
      <b>Server-side rendering (SSR)</b> is the process of rendering web pages on a server and passing them to
      the browser (client-side), instead of rendering them in the browser.
      <StaticImage
        className="m-4"
        alt="Server side rendering flow"
        src="../images/ssr-1.png"
        layout="fullWidth"
      />
      SSR sends a fully rendered page to the client; the client’s JavaScript bundle takes over and enables the
      SPA framework to operate. This means that if your application is server-side rendered, the content is
      fetched from the server and passed to the browser to be displayed to the user.
      <br />
      <br />
      This approach is good if you’re building a complex application that requires user interaction, that
      relies on a database, or whose content changes often. If the content changes often, then users would
      need to see the updates right away. The approach is also good for applications that tailor content
      according to who is viewing it and that store user data such as email addresses and user preferences,
      while also attending to SEO. An example would be a large e-commerce or social media platform. Let’s look
      at some of the advantages of SSR for your applications.
      <StaticImage className="m-4" alt="PHP meme" src="../images/php-meme.jpeg" layout="fullWidth" />
      <b>PROS</b>
      <ol className="px-8 my-4 list-disc">
        <li>
          Search engine optimization. Without a doubt, this is the main advantage when choosing SSR. Pages
          that use this rendering method drive much more traffic and are positioned better in Google Ranking.
          Still, the company reinforces that there is no favoring of SSR, even with frequent users’
          complaints.
        </li>
        <li>
          Also, about SEO, another important advantage in SSR is the faster indexing of pages. This means that
          the algorithms detect the content and rank it in less time.
        </li>
        <li>
          As for loading the page, access is fast for the first time since the HTML file offered by the server
          is complete. This wealth of data and information makes the rendering process very agile.
        </li>
      </ol>
      <b>CONS</b>
      <ol className="px-8 my-4 list-disc">
        <li>
          No matter how fast the first access is in SSR, the rest of the experience may be affected. Each time
          the user accesses another page within the website, a new HTML file is loaded. This generates a large
          use of the server, which accumulates information of all user activity.
        </li>
        <li>
          This typical SSR behavior also generates higher cache retention, with more complex information to be
          processed. Once again, the server is affected, slowing down the browsing experience and causing a
          higher latency in communication with the browser.
        </li>
        <li>
          The consequence of this higher server demand is hiring a more robust hosting service, which has a
          higher cost. The cost-benefit ratio tends to get worse when the choice is SSR.
        </li>
      </ol>
    </>
  );
};

export const ClientSideRenderingWiki = () => {
  return (
    <>
      A single-page application (SPA) is a web application or website that interacts with the user by
      dynamically rewriting the current web page with new data from the web server, instead of the default
      method of a web browser loading entire new pages. The goal is faster transitions that make the website
      feel more like a native app.
      <StaticImage
        className="m-4"
        alt="Server side rendering flow"
        src="../images/csr-1.png"
        layout="fullWidth"
      />
      In a SPA, all necessary HTML, JavaScript, and CSS code is either retrieved by the browser with a single
      page load,[1] or the appropriate resources are dynamically loaded and added to the page as necessary,
      usually in response to user actions. The page does not reload at any point in the process, nor does it
      transfer control to another page, although the location hash or the HTML5 History API can be used to
      provide the perception and navigability of separate logical pages in the application.
      <br />
      <br />
      <b>PROS</b>
      <ol className="px-8 my-4 list-disc">
        <li>
          CSR is the most agile rendering process. The response offering a website ready for interaction is
          much faster when there is no need to load a complete HTML page. In this case, it is enough to
          perform the processing through a JavaScript file.
        </li>
        <li>
          Another important advantage is the server usage level. CSR is much lower, precisely because you
          don’t have to deal with extensive HTML. Thus, more power is available to load the user’s next
          requests, making the experience better.
        </li>
        <li>
          Finally, this is considered the best choice in web application development. In general, CSR makes
          the navigation agile and makes the experience practically flawless.
        </li>
      </ol>
      <b>CONS</b>
      <ol className="px-8 my-4 list-disc">
        <li>
          We need to talk about bad performance in search engines. Because it is based on JavaScript, CSR can
          get in the way of website ranking, as Google faces difficulties finding it.
        </li>
        <li>
          The way CSR rendering is done can generate a slow loading the first time the site is accessed. It’s
          a one-time behavior, but it can generate a bad first perception about the page.
        </li>
      </ol>
    </>
  );
};

export const StaticSiteGenerationWiki = () => {
  return (
    <>
      As websites grew to deliver more and more content, the web development industry found new ways to make
      the process of maintaining and updating sites more efficient.
      <br />
      Years ago, we saw a move away from creating large numbers of individual files by hand, to a system where
      repeated sections of code could be included and repeated more easily. Web servers would perform that
      task on demand whenever a request for a resource was received.
      <br />
      They’d faithfully combine templates and content, apply loops and logic, and return a page view whenever
      one was requested. And we’d have to ensure that they had enough horsepower to keep up with demand,
      fearing the times that our site became popular!
      <br />
      <br />
      Static site generators (SSG) do much the same thing. They apply data and content to templates, and
      generate a view of a page which can be served to the visitors of a site. The greatest difference between
      a static site generator and a traditional web application stack, is that instead of waiting until a page
      is requested and then generating its view on demand each time, a static site generator does this in
      advance so that the view is ready to serve ahead of time. And it does so for every possible view of a
      site at build time.
      <StaticImage
        className="m-4"
        alt="Server side rendering flow"
        src="../images/ssg-1.png"
        layout="fullWidth"
      />
      This might sound like a return to “the old ways” of making sites, but there are some key differences:
      <h3 className="text-2xl my-4">Static site generators got good!</h3>
      The tools have vastly improved over the years. As we learned what capabilities were most important to
      the job of generating lots of site pages, new tools have emerged to those things particularly well. And
      these tools are now very available to developers, meaning that they can get up and running, be
      productive, and begin making sites in minutes.
      <h3 className="text-2xl my-4">Static site generators come in all flavours</h3>
      As the approach began to gain popularity, more and more developers created tools to work in the language
      and environment which best suited their development tastes. You can now find site generators which are
      based in a vast number of programming languages, use different templating languages and conventions, and
      run in all sorts of environments. That familiarity breeds productivity.
      <h3 className="text-2xl my-4">Automation became mainstream</h3>
      The task of updating a site built this way involves running the site generator to produce an updated
      version of the pages. Years ago, this was cumbersome but now there are many tools which can automate
      that task for us. The result is a development workflow which is very effective and predictable, but
      which also yields very robust, pre-generated views as a result.
    </>
  );
};
