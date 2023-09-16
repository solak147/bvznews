<template>
  <div class="flex w-full flex-col overflow-x-hidden border-t">
    <main class="w-full flex-grow p-6">
      <h1 class="pb-6 text-3xl text-black">Dashboard</h1>

      <div class="mt-6 flex flex-wrap">
        <div class="w-full pr-0 lg:w-1/2 lg:pr-2">
          <p class="flex items-center pb-3 text-xl">
            <i class="fas fa-plus mr-3"></i> Monthly Reports
          </p>
          <div class="bg-white p-6">
            <canvas id="chartOne" width="400" height="200"></canvas>
          </div>
        </div>
        <div class="mt-12 w-full pl-0 lg:mt-0 lg:w-1/2 lg:pl-2">
          <p class="flex items-center pb-3 text-xl">
            <i class="fas fa-check mr-3"></i> Resolved Reports
          </p>
          <div class="bg-white p-6">
            <canvas id="chartTwo" width="400" height="200"></canvas>
          </div>
        </div>
      </div>

      <div class="mt-12 w-full">
        <p class="flex items-center pb-3 text-xl">
          <i class="fas fa-list mr-3"></i> Latest Reports
        </p>
        <div class="overflow-auto bg-white">
          <table class="min-w-full bg-white">
            <thead class="bg-gray-800 text-white">
              <tr>
                <th class="w-1/3 px-4 py-3 text-left text-sm font-semibold uppercase">Name</th>
                <th class="w-1/3 px-4 py-3 text-left text-sm font-semibold uppercase">Last name</th>
                <th class="px-4 py-3 text-left text-sm font-semibold uppercase">Phone</th>
                <th class="px-4 py-3 text-left text-sm font-semibold uppercase">Email</th>
              </tr>
            </thead>
            <tbody class="text-gray-700">
              <tr>
                <td class="w-1/3 px-4 py-3 text-left">Lian</td>
                <td class="w-1/3 px-4 py-3 text-left">Smith</td>
                <td class="px-4 py-3 text-left">
                  <a class="hover:text-blue-500" href="tel:622322662">622322662</a>
                </td>
                <td class="px-4 py-3 text-left">
                  <a class="hover:text-blue-500" href="mailto:jonsmith@mail.com"
                    >jonsmith@mail.com</a
                  >
                </td>
              </tr>
              <tr class="bg-gray-200">
                <td class="w-1/3 px-4 py-3 text-left">Emma</td>
                <td class="w-1/3 px-4 py-3 text-left">Johnson</td>
                <td class="px-4 py-3 text-left">
                  <a class="hover:text-blue-500" href="tel:622322662">622322662</a>
                </td>
                <td class="px-4 py-3 text-left">
                  <a class="hover:text-blue-500" href="mailto:jonsmith@mail.com"
                    >jonsmith@mail.com</a
                  >
                </td>
              </tr>
              <tr>
                <td class="w-1/3 px-4 py-3 text-left">Oliver</td>
                <td class="w-1/3 px-4 py-3 text-left">Williams</td>
                <td class="px-4 py-3 text-left">
                  <a class="hover:text-blue-500" href="tel:622322662">622322662</a>
                </td>
                <td class="px-4 py-3 text-left">
                  <a class="hover:text-blue-500" href="mailto:jonsmith@mail.com"
                    >jonsmith@mail.com</a
                  >
                </td>
              </tr>
              <tr class="bg-gray-200">
                <td class="w-1/3 px-4 py-3 text-left">Isabella</td>
                <td class="w-1/3 px-4 py-3 text-left">Brown</td>
                <td class="px-4 py-3 text-left">
                  <a class="hover:text-blue-500" href="tel:622322662">622322662</a>
                </td>
                <td class="px-4 py-3 text-left">
                  <a class="hover:text-blue-500" href="mailto:jonsmith@mail.com"
                    >jonsmith@mail.com</a
                  >
                </td>
              </tr>
              <tr>
                <td class="w-1/3 px-4 py-3 text-left">Lian</td>
                <td class="w-1/3 px-4 py-3 text-left">Smith</td>
                <td class="px-4 py-3 text-left">
                  <a class="hover:text-blue-500" href="tel:622322662">622322662</a>
                </td>
                <td class="px-4 py-3 text-left">
                  <a class="hover:text-blue-500" href="mailto:jonsmith@mail.com"
                    >jonsmith@mail.com</a
                  >
                </td>
              </tr>
              <tr class="bg-gray-200">
                <td class="w-1/3 px-4 py-3 text-left">Emma</td>
                <td class="w-1/3 px-4 py-3 text-left">Johnson</td>
                <td class="px-4 py-3 text-left">
                  <a class="hover:text-blue-500" href="tel:622322662">622322662</a>
                </td>
                <td class="px-4 py-3 text-left">
                  <a class="hover:text-blue-500" href="mailto:jonsmith@mail.com"
                    >jonsmith@mail.com</a
                  >
                </td>
              </tr>
              <tr>
                <td class="w-1/3 px-4 py-3 text-left">Oliver</td>
                <td class="w-1/3 px-4 py-3 text-left">Williams</td>
                <td class="px-4 py-3 text-left">
                  <a class="hover:text-blue-500" href="tel:622322662">622322662</a>
                </td>
                <td class="px-4 py-3 text-left">
                  <a class="hover:text-blue-500" href="mailto:jonsmith@mail.com"
                    >jonsmith@mail.com</a
                  >
                </td>
              </tr>
              <tr class="bg-gray-200">
                <td class="w-1/3 px-4 py-3 text-left">Isabella</td>
                <td class="w-1/3 px-4 py-3 text-left">Brown</td>
                <td class="px-4 py-3 text-left">
                  <a class="hover:text-blue-500" href="tel:622322662">622322662</a>
                </td>
                <td class="px-4 py-3 text-left">
                  <a class="hover:text-blue-500" href="mailto:jonsmith@mail.com"
                    >jonsmith@mail.com</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
    <FooterCpt></FooterCpt>
  </div>
</template>
