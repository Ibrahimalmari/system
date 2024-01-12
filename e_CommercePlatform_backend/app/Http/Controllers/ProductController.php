<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index_admin()
    {
        $product = Product::all();
        return response()->json($product);   
    }

    public function index_seller($id)
    {
        $product =Product::where("created_by",$id)->get();

        return response()->json([
           'status' => 200, 
            'product' =>$product,
           'message'=>'Registered Successfully',
       ]);   
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request ,$id)
    {
        $validatedData = Validator::make($request->all(),[
            'name' => 'required',
            'description' => 'required',
            'price' => 'required',
            'quantity' =>'required',
            'images' => 'required',
            'category_id' => 'required',
            'branch_id' => 'required',
            'store_id' => 'required',
    ]);

    if($validatedData->fails()){
        return response()->json([
            'validation_error'=>$validatedData->messages(),
        ]);
    }

    else{

        $fileImages = [];
        foreach($request->file('image') as $images){
        $imageName = $images->getClientOriginalName();
        $filename =  time() . '.' . $imageName;
        $images->move(public_path('products'),$filename);
    
        $fileImages = $filename;
        }
         $img = json_encode($fileImages);
          $seller = Product::create([
            'name' => $request->name,
            'description'=> $request->description,
            'price'=> $request->price,
            'quantity'=> $request->quantity,
            'phone'=> $request->phone,
            'images'=>$fileImages,
            'category_id'=> $request->category_id,
            'branch_id'=> $request->branch_id,
             'store_id	'=> $request->store_id,
             'created_by'=>$id,
          ]);


          return response()->json([
            'status' => 200, 
            'user' =>$id,
            'message'=>'Product added successfully',
        ]);

        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
