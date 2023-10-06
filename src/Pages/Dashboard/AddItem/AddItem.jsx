import { useForm } from "react-hook-form";

import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const AddItem = () => {
  const [axiosSecure] = useAxiosSecure()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        console.log(imgResponse);
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, price, category, recipe } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            category,
            recipe,
            image: imgURL,
          };
          console.log(newItem);

          axiosSecure.post('/menu', newItem)
          .then(data =>{
            console.log('after posting new menu item', data.data);
            if(data.data.insertedId){
              reset()
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Item added successfully!',
                showConfirmButton: false,
                timer: 1500
              })
              navigate('/menu')
            }
          })
        }
      });
  };
  console.log(errors);

  return (
    <div className="w-full px-10">
      <SectionTitle
        heading="ADD AN ITEM"
        subHeading="What's new?"
      ></SectionTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full ">
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
              <span className="label-text font-semibold">Category*</span>
            </label>
            <select
              defaultValue="Pick one"
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option disabled>Pick one</option>
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
              {...register("price", { required: true })}
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
