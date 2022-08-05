import Home from "../pages/index";
import App from "../pages/_app.js";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";


describe("Typing Challenge", () => {
    it("renders The dashboard", () => {
      render(<App />);
      // check if all components are rendered
      expect(screen.getByTestId("main-text")).toBeInTheDocument();
      expect(screen.getByTestId("one-min")).toBeInTheDocument();
      expect(screen.getByTestId("two-min")).toBeInTheDocument();
      expect(screen.getByTestId("five-min")).toBeInTheDocument();
      expect(screen.getByTestId("time-input")).toBeInTheDocument();
      expect(screen.getByTestId("select-random-text")).toBeInTheDocument();
      expect(screen.getByTestId("start")).toBeInTheDocument();

    });

    it("e2e test when theres nothing is typed in the result box", () => {
        render(<App />);
        // check if start button works
        let box1 = screen.getByTestId("text-input")
        let start = screen.getByTestId("start")

        // type a text in the text box
        fireEvent.change(box1, { target: { value: "hello are you there" } });
        
        //click start and expect the time card to render
        start.click()
        expect(screen.getByTestId("time-card")).toBeInTheDocument();
        expect(screen.getByTestId("done")).toBeInTheDocument();

        //click done and expect the result card to render
        let done = screen.getByTestId("done")
        done.click()
        
        //since the result box was empty expect a score of 0 and accuracy of 0%
        let score = screen.getByTestId("score")
        let accuracy = screen.getByTestId("accuracy")
        expect(screen.getByTestId("score")).toBeInTheDocument();
        expect(screen.getByTestId("accuracy")).toBeInTheDocument();

        expect(score).toHaveTextContent("0");
        expect(accuracy).toHaveTextContent("0%");
      });


      it("e2e test when theres a partially correct result is typed in the result box", () => {
        render(<App />);
        // check if start button works
        let box1 = screen.getByTestId("text-input")
        let box2 = screen.getByTestId("result-input")
        let start = screen.getByTestId("start")

        // type a text in the text box
        fireEvent.change(box1, { target: { value: "hello are you there" } });
        
        //click start and expect the time card to render
        start.click()

        fireEvent.change(box2, { target: { value: "hello are yu there" } });

        expect(screen.getByTestId("time-card")).toBeInTheDocument();
        expect(screen.getByTestId("done")).toBeInTheDocument();

        //click done and expect the result card to render
        let done = screen.getByTestId("done")
        done.click()
        
        //since the result box was empty expect a score of 0 and accuracy of 0%
        let score = screen.getByTestId("score")
        let accuracy = screen.getByTestId("accuracy")
        expect(screen.getByTestId("score")).toBeInTheDocument();
        expect(screen.getByTestId("accuracy")).toBeInTheDocument();

        expect(score).toHaveTextContent("3");
        expect(accuracy).toHaveTextContent("75%");
      });

      it("e2e test when theres a completely correct result is typed in the result box", () => {
        render(<App />);
        // check if start button works
        let box1 = screen.getByTestId("text-input")
        let box2 = screen.getByTestId("result-input")
        let start = screen.getByTestId("start")

        // type a text in the text box
        fireEvent.change(box1, { target: { value: "hello are you there" } });
        
        //click start and expect the time card to render
        start.click()

        fireEvent.change(box2, { target: { value: "hello are you there" } });

        expect(screen.getByTestId("time-card")).toBeInTheDocument();
        expect(screen.getByTestId("done")).toBeInTheDocument();

        //click done and expect the result card to render
        let done = screen.getByTestId("done")
        done.click()
        
        //since the result box was empty expect a score of 0 and accuracy of 0%
        let score = screen.getByTestId("score")
        let accuracy = screen.getByTestId("accuracy")
        expect(screen.getByTestId("score")).toBeInTheDocument();
        expect(screen.getByTestId("accuracy")).toBeInTheDocument();

        expect(score).toHaveTextContent("4");
        expect(accuracy).toHaveTextContent("100%");
      });

      it("Testing the random text button", () => {
        render(<App />);
        // check if start button works
        let box1 = screen.getByTestId("text-input")
        let box2 = screen.getByTestId("result-input")
        let start = screen.getByTestId("start")
        let randomText = screen.getByTestId("select-random-text")

        // use the select-random text button to input text in the text box
        randomText.click()
        
        //expect the text box to have content
        expect(box1).toHaveTextContent("The");

      });

      it("Testing the select time button", () => {
        render(<App />);
        // check if start button works
        let box1 = screen.getByTestId("text-input")
        let two_min = screen.getByTestId("two-min")
        let box2 = screen.getByTestId("result-input")
        let start = screen.getByTestId("start")
        let randomText = screen.getByTestId("select-random-text")

        // use the select-random text button to input text in the text box
        randomText.click()

        //click start
        two_min.click()
        start.click()

        //expect time to be 2 mins
        let timeCard = screen.getByTestId("time-card")
        expect(timeCard).toHaveTextContent("02:00");
      });

      it("Testing the custom time input", () => {
        render(<App />);
        // check if start button works
        let box1 = screen.getByTestId("text-input")
        let two_min = screen.getByTestId("two-min")
        let timeInput = screen.getByTestId("time-input")
        let start = screen.getByTestId("start")
        let randomText = screen.getByTestId("select-random-text")

        // use the select-random text button to input text in the text box
        randomText.click()

        //set custom time
        fireEvent.change(timeInput, { target: { value: 15 } });

        //click start
        start.click()

        //expect time to be 15 mins
        let timeCard = screen.getByTestId("time-card")
        expect(timeCard).toHaveTextContent("15:00");
      });



  });