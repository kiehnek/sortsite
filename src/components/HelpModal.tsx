const HelpText: React.FC = () => (
  <>
    <p className="max-w-screen-md text-justify">
      Click on two values to compare them. Drag values to a free spot to move
      them. You can change the number of values or hide them if you want to make
      it harder for yourself. How often do you need to move/compare values to
      sort the list?
    </p>
    <p className="mt-2 text-sm">
      Copyright (c) 2022 korki [
      <a
        href="https://github.com/kiehnek/sortsite/blob/main/LICENSE"
        className="underline"
      >
        License
      </a>
      ] [
      <a href="https://github.com/kiehnek/sortsite" className="underline">
        Source
      </a>
      ]
    </p>
  </>
);

export default HelpText;
