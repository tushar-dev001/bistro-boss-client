import { useForm } from "react-hook-form";

import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const AddItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  };
  console.log(errors);

  return (
    <div className="w-full px-10">
      <SectionTitle
        heading="ADD AN ITEM"
        subHeading="What's new?"
      ></SectionTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-semibold">Recipe name*</span>
          </label>
          <input
            type="text"
            placeholder="Recipe name here"
            className="input input-bordered w-full max-w-xs"
            {...register("name", { required: true, maxLength: 120 })}
          />
        </div>

        <div className="flex gap-x-10 my-5">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">
                Category*
              </span>
            </label>
            <select
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option disabled selected>
                Pick one
              </option>
              <option>Salad</option>
              <option>Pizza</option>
              <option>Soup</option>
              <option>Dessert</option>
              <option>Drinks</option>
            </select>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="text"
              placeholder="Price here"
              className="input input-bordered w-full max-w-xs"
              {...register("price", {
                required: true,
                minLength: 6,
                maxLength: 12,
              })}
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipe Details*</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Recipe Details"
            {...register("recipe", { required: true })}
          ></textarea>
        </div>

        <input
          type="file"
          {...register("image", { required: true })}
          className="file-input file-input-bordered file-input-warning w-full max-w-xs my-5"
        />
        <br />

        <input
          className="btn btn-outline btn-warning px-8"
          type="submit"
          value="Add Item"
        />
      </form>
    </div>
  );
};

export default AddItem;
