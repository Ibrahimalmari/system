<?php

namespace App\Http\Controllers;

use App\Models\Section;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class SectionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index_admin()
    {
        $section = Section::all();
        return response()->json([
           'status' => 200, 
           'section' =>$section,
           'message'=>'Registered Successfully',
       ]);
    }

    public function index_seller($id)
    {
        $section =Section::where("created_by",$id)->get();

        return response()->json([
           'status' => 200, 
            'section' =>$section,
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
          
    ]);

    if($validatedData->fails()){
        return response()->json([
            'validation_error'=>$validatedData->messages(),
        ]);
    }

    else{

    
       
          $section = Section::create([
            'name' => $request->name,
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
