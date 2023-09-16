<template>
  <div class="container mx-auto h-full px-4">
    <div class="flex h-full content-center items-center justify-center">
      <div class="w-full px-4 lg:w-4/12">
        <div
          class="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg border-0 bg-gray-200 shadow-lg"
        >
          <div class="mb-0 rounded-t px-6 py-6">
            <div class="mb-3 text-center">
              <h6 class="text-sm font-bold text-gray-500">Sign in with</h6>
            </div>
            <div class="btn-wrapper text-center">
              <button
                class="mb-1 mr-2 inline-flex items-center rounded bg-white px-4 py-2 text-xs font-bold font-normal uppercase text-gray-700 shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-gray-50"
                type="button"
              >
                <img
                  alt="..."
                  class="mr-1 w-5"
                  src="https://demos.creative-tim.com/notus-nextjs/img/github.svg"
                />Github</button
              ><button
                class="mb-1 mr-1 inline-flex items-center rounded bg-white px-4 py-2 text-xs font-bold font-normal uppercase text-gray-700 shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-gray-50"
                type="button"
              >
                <img
                  alt="..."
                  class="mr-1 w-5"
                  src="https://demos.creative-tim.com/notus-nextjs/img/google.svg"
                />Google
              </button>
            </div>
            <hr class="border-b-1 mt-6 border-gray-300" />
          </div>
          <div class="flex-auto px-4 py-10 pt-0 lg:px-10">
            <div class="mb-3 text-center font-bold text-gray-400">
              <small>Or sign in with credentials</small>
            </div>
            <form>
              <div class="relative mb-3 w-full">
                <label
                  class="mb-2 block text-xs font-bold uppercase text-gray-600"
                  for="grid-password"
                  >Email</label
                ><input
                  type="email"
                  class="w-full rounded border-0 bg-white px-3 py-3 text-sm text-gray-600 placeholder-gray-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                  placeholder="Email"
                />
              </div>
              <div class="relative mb-3 w-full">
                <label
                  class="mb-2 block text-xs font-bold uppercase text-gray-600"
                  for="grid-password"
                  >Password</label
                ><input
                  type="password"
                  class="w-full rounded border-0 bg-white px-3 py-3 text-sm text-gray-600 placeholder-gray-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                  placeholder="Password"
                />
              </div>
              <div>
                <label class="inline-flex cursor-pointer items-center"
                  ><input
                    id="customCheckLogin"
                    type="checkbox"
                    class="form-checkbox ml-1 h-5 w-5 rounded border-0 text-gray-700 transition-all duration-150 ease-linear"
                  /><span class="ml-2 text-sm font-semibold text-gray-600">Remember me</span></label
                >
              </div>
              <div class="mt-6 text-center">
                <button
                  class="mb-1 mr-1 w-full rounded bg-gray-800 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-gray-600"
                  type="button"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="relative mt-6 flex flex-wrap">
          <div class="w-1/2">
            <a href="#pablo" class="text-gray-200"><small>Forgot password?</small></a>
          </div>
          <div class="w-1/2 text-right">
            <a href="#pablo" class="text-gray-200"><small>Create new account</small></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
