## :computer: Tech stack

The project is written in **React** with **Typescript**. When it comes to styling, I used **Tailwind**.

There is no state management system - all data is passed via props through the app.

## :file_folder: Folder Structure

```ts
public/
src/
├─ api /
├─ components/
│ │ ├─ Component.tsx
├─ queries/
├─ types/
App.tsx
main.tsx
styles.css
```

## :hammer: Development

Install dependencies:

```
npm i
```

Now, you can start a local web server by running:

```
npm run dev
```

## :computer: Implementation of Features Explanation

**Transfer the project to TypeScript**

The project has been migrated from JavaScript (JSX) to TypeScript (TS), resulting in improved codebase clarity and type safety.

Each component in the components folder now has its own ComponentProps type, promoting better code organization. Additionally, a types folder centralizes interfaces, enhancing consistency in data structures across the project.

## :sparkles: Tabbed Components Addition

Tabs components have been introduced to address the following three tasks:

**Create a List Component**

For the creation of the List Component, a UserListTab component has been implemented. Within this component, the <ListComponent /> is utilized, and a renderItem method is provided. The integration of useUsersQuery from react-query ensures data handling. Additionally, a fetchUsersData function has been added to the api folder for fetching user data.

**Create a Form Generator Component**

FormField component has been developed to dynamically render either input or textarea fields conditionally.

To enhance user experience, a setTimeout function has been incorporated to display success messages after successful data submission.

In the FormGenerator reusable function, the useMutation hook has been implemented, ensuring efficient handling of data mutations.

**Create a Page Generator Component**

The PageGeneratorTab component has been implemented to accommodate dynamic pages. Detailed prop types have been defined to ensure clarity and consistency. A corresponding componentMap has been established, integrating various reusable components.

To facilitate the rendering of information, the component efficiently utilizes task data, providing additional context for accurate display. Despite my initial lack of experience in implementing dynamic pages, this project has been a valuable learning experience. Local testing has revealed potential UI adjustments.

This implementation represents a dedicated effort to apply new concepts, showcasing a commitment to continuous improvement.
