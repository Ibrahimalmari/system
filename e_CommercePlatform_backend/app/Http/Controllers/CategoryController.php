<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\SellerMan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index_admin()
    {
        $category = Category::all();
         return response()->json([
            'status' => 200, 
             'category' =>$category,
            'message'=>'Registered Successfully',
        ]); 
        
    }

    public function index_seller($id)
    {
        $category =Category::where("created_by",$id)->get();

        return response()->json([
           'status' => 200, 
            'category' =>$category,
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
        

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request , $id)
    {

        
        $validatedData = Validator::make($request->all(),[
            'name' => 'required',
            'slug' => 'required',
            'description' => 'required',
            'image' => 'required',
          
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
        $images->move(public_path('categories'),$filename);
    
        $fileImages = $filename;
        }
        //  $img = json_encode($fileImages);


          $category = Category::create([
            'name' => $request->name,
            'slug'=> $request->slug,
            'description'=> $request->description,
            'image'=>$fileImages,
            'created_by'=>$id,
          ]);


          return response()->json([
            'status' => 200, 
            'user' => $id,
            'message'=>'Category added successfully',
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
