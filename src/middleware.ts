import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

export default clerkMiddleware((auth, req) => {
  console.log("MIDDLEWARE", req.url);
  console.log("MATCHER", createRouteMatcher(["/", "/protected"])(req));

  if (createRouteMatcher(["/", "/protected"])(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
