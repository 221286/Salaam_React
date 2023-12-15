import { render,screen } from "@testing-library/react"
import Contactus from "../Contact"
import "@testing-library/jest-dom"


describe("checking the contact us page",()=>{

    it("Should contain header with  ",()=>{
        render(<Contactus />);
        const find_header = screen.getByText("phone:8210218453");
        expect(find_header).toBeInTheDocument(1);
    });
    
    
    it("Should contain multiple headers ",()=>{
        render(<Contactus />);
        const find_header = screen.getAllByRole("heading");
        expect(find_header.length).not.toBe(1);
    });
    
    test("Should contain headers with mail",()=>{
        render(<Contactus />);
        const find_header = screen.getByRole("heading",{name:"email:anisosama07@gmail.com"});
        expect(find_header).toBeInTheDocument();
    });
    
    test("Should contain headers with name anis",()=>{
        render(<Contactus />);
        const find_header = screen.getByRole("heading",{name:/anis/});
        expect(find_header).toBeInTheDocument();
    });

})
