"use client";
import Image from "next/image";
// headlessUI
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
// Redux 
import { useAppDispatch } from "@/redux/hooks";
import { setFilter } from "@/redux/features/filtersSlice";
// Types
import { CustomFilterProps, Option } from "@/types";

function CustomerFilter<T>({ title, options }: CustomFilterProps<T>) {
  const [selected, setSelected] = useState<Option>(options[0]);
  const dispatch = useAppDispatch();
  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e); 
          dispatch(setFilter({title, value: e.value})); // Update the URL search parameters and navigate to the new URL
        }}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className="object-contain ml-4"
              alt="chevron up down"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export default CustomerFilter;
