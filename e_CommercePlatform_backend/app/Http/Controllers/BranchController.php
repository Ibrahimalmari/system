<?php

namespace App\Http\Controllers;

use App\Models\Branch;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BranchController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index_admin()
    {
        $branch = Branch::all();
        return response()->json([
           'status' => 200, 
            'branch' =>$branch,
           'message'=>'Registered Successfully',
       ]);
    }
    public function index_seller($id)
    {
        $branch =Branch::where("created_by",$id)->get();

        return response()->json([
           'status' => 200, 
            'branch' =>$branch,
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
            'image' => 'required',
            'category_id'=>'required',

          
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
        $images->move(public_path('branches'),$filename);
    
        $fileImages = $filename;
        }
         $img = json_encode($fileImages);
          $branch = Branch::create([
            'name' => $request->name,
            'category_id'=> $request->category_id,
            'image'=>$images,
            'created_by'=>$id,
          ]);


          return response()->json([
            'status' => 200, 
            'user' =>$id,
            'message'=>'Brunch added successfully',
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
