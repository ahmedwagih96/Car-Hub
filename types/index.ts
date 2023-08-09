import { Dispatch, MouseEventHandler, SetStateAction } from "react";

export interface HomeProps {
  searchParams: FilterProps;
}

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  textStyles? :string;
  rightIcon? :string;
  isDisabled? :boolean

}

export interface SearchManufacturerProps{
  manufacturer: string;
  setManufacturer: Dispatch<SetStateAction<string>>
}

export interface CarProps {
  city_mpg: number;
class: string;
combination_mpg: number;
cylinders: number;
displacement: number;
drive: string;
fuel_type:string;
highway_mpg: number;
make: string;
model:string;
transmission: string;
year: number;
}

export interface CarResultsProps {
  allCars: CarProps;
  searchParams: FilterProps
}

export interface CarDetailsProps {
  isOpen: boolean;
  closeModal: ()=> void;
  car: CarProps
}

export interface FilterProps{
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
}

export interface Option { 
  title: string;
  value: string
}

export interface CustomFilterProps{
  title: string;
  options: Option[] 
}  

export interface ShowMoreProps{
  pageNumber: number,
  isNext: boolean
}